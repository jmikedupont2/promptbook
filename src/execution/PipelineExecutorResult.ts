import { ReadonlyDeep } from 'type-fest';
import type { ErrorJson } from '../errors/utils/ErrorJson';
import type { PipelineJson } from '../pipeline/PipelineJson/PipelineJson';
import type { Parameters } from '../types/typeAliases';
import type { ExecutionReportJson } from './execution-report/ExecutionReportJson';
import type { PromptResultUsage } from './PromptResultUsage';

/**
 * @@@
 *
 * Note: [🚉] This is fully serializable as JSON
 */
export type PipelineExecutorResult = {
    /**
     * Result parameters of the execution
     *
     * Note: If the execution was not successful, there are only some of the result parameters
     */
    readonly outputParameters: Readonly<Parameters>;

    /**
     * Whether the execution was successful, details are aviable in `executionReport`
     */
    readonly isSuccessful: boolean;

    /**
     * Added usage of whole execution, detailed usage is aviable in `executionReport`
     */
    readonly usage: ReadonlyDeep<PromptResultUsage>;

    /**
     * Errors that occured during the execution, details are aviable in `executionReport`
     */
    readonly errors: ReadonlyDeep<ReadonlyArray<ErrorJson>>;

    /**
     * Warnings that occured during the execution, details are aviable in `executionReport`
     */
    readonly warnings: ReadonlyDeep<ReadonlyArray<ErrorJson>>;

    /**
     * The report of the execution with all details
     */
    readonly executionReport: ReadonlyDeep<ExecutionReportJson>;

    /**
     * The prepared pipeline that was used for the execution
     *
     * Note: If you called `createPipelineExecutor` with fully prepared pipeline, this is the same object as this pipeline
     *       If you passed not fully prepared pipeline, this is same pipeline but fully prepared
     */
    readonly preparedPipeline: ReadonlyDeep<PipelineJson>;
};

/**
 * TODO: [🐚] Enwrap in ExecutionTask
 * TODO: [🧠] Should this file be in /execution or /types folder?
 * TODO: [🧠] Maybe constrain `ErrorJson` -> `ErrorJson & { name: 'PipelineExecutionError' | 'Error' }`
 */
