import * as contentful from 'contentful';

const client = contentful.createClient({
  space: 'a9cruo5ogxwv',
  accessToken: 'oYz6w2evPrLIQOhhZd5NGPa0B2j3P2AAnWbhEO8fIRc'
});

const getTeamData = () =>
  client.getEntries().then((response) => response.items);

export { getTeamData };
