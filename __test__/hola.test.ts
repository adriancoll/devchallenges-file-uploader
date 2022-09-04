import { describe, it, expect } from 'vitest'

const farlopa = () => {}

describe('test', () => { 

    it('should be a function', () => {
        expect(typeof farlopa).toBe('function')
    })

})