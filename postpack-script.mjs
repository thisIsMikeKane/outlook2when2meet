import moment from 'moment';
import fs from 'fs';
import path from 'path';
import archiver from 'archiver';
import { glob } from 'glob';

function getCurrentTimestamp() {
    const now = moment();
    return now.format('YYYYMMDD-HHmmSS');
}

// Distribution directory zip

const distFolder = './dist/';
const distZipFile = 'outlook2when2meet-dist-'+getCurrentTimestamp()+'.zip';

try {

  const files = await glob(distFolder+'**/*');

  const output = fs.createWriteStream(distZipFile);
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Compression level
  });

  output.on('close', () => {
    console.log(`Folder zipped successfully. Total bytes: ${archive.pointer()}`);
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);

  files.forEach((file) => {
    archive.file(file, { name: path.relative(distFolder, file) });
  });

  archive.finalize();
} catch (err) {
  console.error('Error:', err);
}

// Source directory zip

// Define the directories and file types to exclude
const excludePatterns = [
  'dist/**',
  'node_modules/**',
  '.git/**',
  '**/*.zip',
];

const srcZipFile = 'outlook2when2meet-src-'+getCurrentTimestamp()+'.zip';

(async () => {
  try {

    const files = await glob(['./**/*', './.env'], { ignore: excludePatterns });

    const output = fs.createWriteStream(srcZipFile);
    const archive = archiver('zip', {
      zlib: { level: 9 }, // Compression level
    });

    output.on('close', () => {
      console.log(`Folder zipped successfully. Total bytes: ${archive.pointer()}`);
    });

    archive.on('error', (err) => {
      throw err;
    });

    archive.pipe(output);

    files.forEach((file) => {
      archive.file(file, { name: path.relative('.', file) });
    });

    archive.finalize();
  } catch (err) {
    console.error('Error:', err);
  }
})();

