import type { PromptResultUsage } from '../../execution/PromptResultUsage';
import type { string_promptbook_version } from '../../version';
import type { number_id } from '../typeAliases';

export type PreparationJson = {
    /**
     * Incremental ID of the preparation
     */
    readonly id: number_id;

    /*
    TODO: [🍥]
    > /**
    >  * Date and time of the preparation
    >  * /
    > readonly date: string_date_iso8601;
    */

    /**
     * Version of the promptbook used for the preparation
     */
    readonly promptbookVersion: string_promptbook_version;

    /**
     * Usage of the prompt execution
     */
    readonly usage: PromptResultUsage;
};

/**
 * TODO: [🍙] Make some standard order of json properties
 * TODO: Maybe put here used `modelName`
 * TODO: [🍥] When using `date` it changes all examples .book.json files each time so until some more elegant solution omit the time from prepared pipeline
 */
