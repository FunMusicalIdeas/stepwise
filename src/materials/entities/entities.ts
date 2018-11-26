import { Entity } from '../../../../../compile'
import { BuildEntitiesFunction } from '../../../../types'
import { buildStepwiseOscillatorEntities } from './oscillatorEntities'
import { buildStepwiseSampleEntities } from './sampleEntities'

const buildEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const {
            stepwiseFivePerSampleEntity,
            stepwiseHihatSampleEntity,
            stepwiseKickSampleEntity,
            stepwiseMainDescentContinuationSampleEntity,
            stepwiseMainDescentSampleEntity,
            stepwiseSevenPerSampleEntity,
            stepwiseSnareSampleEntity,
            stepwiseThreePerSampleEntity,
        } = buildStepwiseSampleEntities()

        const {
            stepwiseBackboneOscillatorEntity,
            stepwiseFivePerOscillatorEntity,
            stepwiseMainDescentContinuationOscillatorEntity,
            stepwiseMainDescentOscillatorEntity,
            stepwiseSevenPerOscillatorEntity,
            stepwiseThreePerOscillatorEntity,
        } = buildStepwiseOscillatorEntities()

        return [
            stepwiseMainDescentOscillatorEntity,
            stepwiseMainDescentContinuationOscillatorEntity,
            stepwiseBackboneOscillatorEntity,
            stepwiseHihatSampleEntity,
        ]
    }

export {
    buildEntities,
}
