import Route from '@ember/routing/route';

export default class WorkflowsRoute extends Route {
  async model() {
    let res = await fetch('/api/workflows.json');
    let { data } = await res.json();

    return data.map((item) => {
      let { id, attributes } = item;

      return { id, ...attributes };
    });
  }
}

