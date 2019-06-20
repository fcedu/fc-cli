import {Command} from '@oclif/command'
import * as inquirer from 'inquirer'
import * as shell from 'shelljs'

interface Repository {
  name: string
  repository: string
  requireInstall: boolean
}

// 可选列表
const repositoryList: Repository[] = [
  {
    name: '[React] 不使用 NPM、Node、JSX 的模板项目',
    repository: 'https://github.com/fcedu/react-without-node-boilerplate',
    requireInstall: false
  },
  {
    name: '[React] webpack 基础模板项目',
    repository: 'https://github.com/fcedu/react-webpack-boilerplate',
    requireInstall: true
  }
]

// 检测 gits
// 选择项目模板
// 输入项目名称

export default class Init extends Command {
  static description = '通过选择模板初始化项目。'

  async getGitRepository() {
    const responses: any = await inquirer.prompt([
      {
        name: 'gitRepository',
        message: '请选择一个项目模板!',
        type: 'list',
        choices: repositoryList.map((item, index) => ({name: item.name, value: index})),
      }
    ])

    return responses.gitRepository
  }

  async getProjectName() {
    const responses: any = await inquirer.prompt([
      {
        name: 'projectName',
        message: '请输入您的项目名称!',
        type: 'input'
      }
    ])

    if (responses.projectName.trim() === '') {
      let projectName: string = await this.getProjectName()

      return projectName
    }

    return responses.projectName
  }

  async cloneBoilerpate(gitRepository: string, projectName: string) {
    let responses = shell.exec(`git clone ${gitRepository} ${projectName}`)

    return responses.code === 0
  }

  async run() {
    if (!shell.which('git')) {
      this.error('该命令依赖 git 环境，请先安装 git!')
      this.exit(1)
    }

    let repositoryIndex: number = await this.getGitRepository()
    let projectName: string = await this.getProjectName()
    let repository = repositoryList[repositoryIndex]

    let ok = await this.cloneBoilerpate(repository.repository, projectName)

    if (ok) {
      const path = `${process.cwd()}/${projectName}`
      shell.cd(path)
      shell.exec('git remote remove origin')

      if (repository.requireInstall) {
        shell.exec('npx yarn')
      }
    }

    this.log(`创建完成，请切换到 ${ projectName } 下进行相关操作!`)
  }
}
