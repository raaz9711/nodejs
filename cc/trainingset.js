console.log(`Starting directory: ${process.cwd()}`);
try {
  process.chdir('./cds');
  console.log(`New directory: ${process.cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}