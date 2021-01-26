import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_image_gallery extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_image_gallery:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_image_gallery is activated!');
  }
};

export default extension;
