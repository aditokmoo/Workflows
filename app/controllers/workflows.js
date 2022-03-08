import Controller from '@ember/controller';

export default class WorkflowsController extends Controller {
  get sortTalent() {
    const data = this.model;

    const result = data.map((item) => {
      
      if (item.type === 'TalentCloud') {
        return item
      } else {
        return item
      }
    }).filter(function talent(item) {
      if(item.type === 'TalentCloud') {
        return true
      } else {
        return false
      }
    })

    return result
  } 

  get sortRecruit() {
    const data = this.model;

    const result = data.map((item) => {
      
      if (item.type === 'RecruitingCloud') {
        return item
      } else {
        return item
      }
    }).filter(function recruit(item) {
      if(item.type === 'RecruitingCloud') {
        return true
      } else {
        return false
      }
    })

    return result
  } 

  /*
  @filterBy('data', 'type', 'TalentCloud') talentCloud;
  @filterBy('data', 'type', 'RecruitingCloud') recruitingCloud;
*/
}
