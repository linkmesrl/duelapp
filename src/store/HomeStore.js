import { observable } from 'mobx';
import autobind from 'autobind-decorator';

@autobind
class HomeStore {
  @observable name = 'DuelApp';
}

export default new HomeStore();
