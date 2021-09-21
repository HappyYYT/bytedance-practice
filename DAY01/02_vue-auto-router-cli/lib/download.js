const {promisify} = require('util');
module.exports.clone = async function(repo, desc) {
    const download = promisify(require('download-git-repo'));
    // 做一个进度条
    const {default: ora} = await import('ora');
    const process = ora(`🧸下载.....${repo}`);
    process.start();
    await download(repo, desc);
    process.succeed();
}