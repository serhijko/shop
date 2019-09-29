import fakeServer from './rest';

export default type => {
    switch (type) {
        case 'graphql':
            return import('./graphql').then(factory => factory.default());
        default:
            return fakeServer;
    }
};
