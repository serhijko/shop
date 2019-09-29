import dataProvider from './rest';

export default type => {
    switch (type) {
        case 'graphql':
            return import('./graphql').then(factory => factory.default());
        default:
            return dataProvider;
    }
};
