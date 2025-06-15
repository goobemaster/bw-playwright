export default [
    '--require-module ts-node/register',
    '--import tests/steps/*.ts',
    '--format progress-bar'
].join(" ");