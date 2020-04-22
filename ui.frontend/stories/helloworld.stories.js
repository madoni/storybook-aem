import HelloWorldTemplate from '../../ui.apps/src/main/content/jcr_root/apps/storybook/components/helloworld/helloworld.html';
import { aemMetadata, GenericModel } from '@storybook/aem';

export default {
    title: 'Hello World'
};


export const HelloWorld = () => ({
    template: HelloWorldTemplate,
    properties: {
        text: 'Hello World!!!'
    },
    aemMetadata: {
        models: {
            'com.madoni.core.models.HelloWorldModel': GenericModel
        }
    }
});
