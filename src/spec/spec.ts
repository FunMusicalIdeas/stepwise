import {
    Spec,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpec,
    StandardSpecs,
} from '@musical-patterns/pattern'
import { STEPWISE_INITIAL_BASE_DURATION, STEPWISE_INITIAL_BASE_FREQUENCY } from './constants'

const initial: StandardSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.BASE_DURATION ]: STEPWISE_INITIAL_BASE_DURATION,
    [ StandardSpec.BASE_FREQUENCY ]: STEPWISE_INITIAL_BASE_FREQUENCY,
}

const spec: Spec<StandardSpecs> = {
    configurations: standardConfigurations,
    initial,
}

export {
    spec,
}