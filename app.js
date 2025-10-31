const framework = require('@developpement/tp-framework');
const local_cache = require('@developpement/tp-client/local_cache');
require('@developpement/tp-framework/lib/extra_core_functions');

const app = new framework.App({ base_path: '/test/v1', port: 8100 });
app.bootstrap();
local_cache.linkApp(app);
app.start();

module.exports = app;
