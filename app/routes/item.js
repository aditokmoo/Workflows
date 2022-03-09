import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  async model(params) {
    /*
    let res = await fetch(`/api/workflows/${params.item_id}.json`);
    let { data } = await res.json();

    return data.map((item) => {
      let { id, attributes } = item;

      return { id, ...attributes };
    });
    */
  }
}