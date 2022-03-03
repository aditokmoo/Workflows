import Controller from '@ember/controller';
import { filterBy } from '@ember/object/computed';

export default class WorkflowsController extends Controller {  
    @filterBy('data', 'type', 'TalentCloud') talentCloud;
}
