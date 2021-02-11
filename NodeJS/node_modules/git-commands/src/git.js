/**
 * 
 * @desc git-commands
 * @date 2018-07-03
 * @author gavinning gavinning@qq.com
 *
 * @history
 *    created at 2018-07-03 by gavinning
 *
 */

const { execFileSync } = require('child_process')

class Git {
    constructor({ reps }) {
        this.reps = reps
    }

    command(cmd) {
        return execFileSync('git', Array.isArray(cmd) ? cmd : cmd.split(' '), {cwd: this.reps}).toString('utf8')
    }

    pull() {
        return this.command('pull')
    }
}

module.exports = Git