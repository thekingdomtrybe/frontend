// This file tells jest where to store generated snapshots

module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) => testPath + snapshotExtension,
  resolveTestPath: (snapshotFilePath, snapshotExtension) => snapshotFilePath.replace(snapshotExtension, ''),

  testPathForConsistencyCheck: 'some.test.js',
};
