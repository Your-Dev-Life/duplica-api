module.exports = async () => {
  const serverless = new (require('serverless'))();

  await serverless.init();
  const service = await serverless.variables.populateService();

  const duplicaTableProperties = {
    ...service.resources.Resources.DuplicaTable.Properties,
    TableName: 'DUPLICA-tests',
  };

  return {
    tables: [duplicaTableProperties],
    port: 9000,
  };
};
