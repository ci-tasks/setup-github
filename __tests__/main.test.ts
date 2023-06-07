import {setup} from '../src/setup'
import {test} from '@jest/globals'

test('sets the git environment', async () => {
  await setup({token: 'unknown'})
})
