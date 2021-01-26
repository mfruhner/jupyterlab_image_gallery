import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';


import { MainAreaWidget  } from '@jupyterlab/apputils';
import { ILauncher  } from '@jupyterlab/launcher';
import { Widget } from '@lumino/widgets';


/**
 * Initialization data for the jupyterlab_image_gallery extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-image-gallery',
  autoStart: true,
  requires: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
      
    const content = new Widget();
    const widget = new MainAreaWidget({ content });
      
    widget.id = 'image-gallery-jupyterlab';
    widget.title.label = 'Image Gallery';
    widget.title.closable = true;

    // Add an application command to open the gallery window
    const commandOpen: string = 'image-gallery:open';
    app.commands.addCommand(commandOpen, {
        label: 'Open Image Gallery',
        execute: () => {
          if (!widget.isAttached) {
            // Attach the widget to the main work area if it's not there
            app.shell.add(widget, 'main');
          }
          // Activate the widget
          app.shell.activateById(widget.id);
        }
    });
      
    console.log(launcher);
    launcher.add({
        command: commandOpen,
        category: 'Other',
        rank: 0
    });
      
    console.log('JupyterLab extension jupyterlab_image_gallery is activated!');
  }
};

export default extension;
