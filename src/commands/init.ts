import {Command} from '@oclif/command'
import * as inquirer from 'inquirer'


export default class Init extends Command {
  static description = '通过选择模板初始化项目。';

  async run() {

    let responses: any = await inquirer.prompt([{
      name: 'project',
      message: '请选择一个项目模板!',
      type: 'list',
      choices: [
        {name: 'vue 商城项目'},
        {name: 'react 商城项目'}
      ],
    }])

    let project = responses.project

    this.log(`您选择的项目是: ${project}`)
  }
}
