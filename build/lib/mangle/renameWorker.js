"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const workerpool = require("workerpool");
const staticLanguageServiceHost_1 = require("./staticLanguageServiceHost");
let service; // = ts.createLanguageService(new StaticLanguageServiceHost(projectPath));
function findRenameLocations(projectPath, fileName, position) {
    if (!service) {
        service = ts.createLanguageService(new staticLanguageServiceHost_1.StaticLanguageServiceHost(projectPath));
    }
    return service.findRenameLocations(fileName, position, false, false, true) ?? [];
}
workerpool.worker({
    findRenameLocations
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuYW1lV29ya2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVuYW1lV29ya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O2dHQUdnRzs7QUFFaEcsaUNBQWlDO0FBQ2pDLHlDQUF5QztBQUN6QywyRUFBd0U7QUFFeEUsSUFBSSxPQUF1QyxDQUFDLENBQUEsMEVBQTBFO0FBRXRILFNBQVMsbUJBQW1CLENBQzNCLFdBQW1CLEVBQ25CLFFBQWdCLEVBQ2hCLFFBQWdCO0lBRWhCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNkLE9BQU8sR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsSUFBSSxxREFBeUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxPQUFPLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2xGLENBQUM7QUFFRCxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQ2pCLG1CQUFtQjtDQUNuQixDQUFDLENBQUMifQ==