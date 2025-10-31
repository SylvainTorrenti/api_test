const tp_client = require('@developpement/tp-client');
const app = require('../../app');

class MyController {
  async something(req) {
    req.logInfo('NO_QUERY', 'There is no query input, it might not be normal');

    const { xml_request, xml_response, xml_error } = { /* do stuff with supplier */ };
    app.Logs.trace(req, 'supplier_name', '/search.json', 200, xml_request, xml_response, xml_error);

    try {
      const stuff = await tp_client.some_module.some_call(req, 'some param');
      xml_response.stuff = stuff;
    } catch (err) {
      throw req.rebuildError(500, 'Failed to make some_call', err);
    }

    return { my_output: xml_response };
  }
}

module.exports = app.Action.newClass(MyController);
