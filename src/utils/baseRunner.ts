/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Tencent Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";

export abstract class BaseRunner {

    public tfExecutor: any;

    constructor() {
        this.init();
    }

    /**
     * execute this command to prepare the terraform import.
     * @param cwd 
     * @returns 
     */
    public abstract preImport(cwd: string, args?: any, path?: string): Promise<any>;

    /**
     * execute this command to display/output the terraform state.
     * @param cwd 
     * @returns 
     */
    public abstract executeShow(cwd: string, args?: string): Promise<any>;

    /**
     * execute this command to import the existing resource from tencentcloud
     * @param cwd 
     * @param args 
     * @returns 
     */
    public abstract executeImport(cwd: string, args?: string): Promise<any>;

    /**
     * execute this command to handle post of the terraform import.
     * @param cwd 
     * @returns 
     */
    public abstract postImport(cwd: string, args?: string): Promise<any>;

    /**
     * check binary whether ready or not
     */
    public abstract checkInstalled(): Promise<void>;

    public abstract init(): void;
}
