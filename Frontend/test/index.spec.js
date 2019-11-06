const assert = require('chai').assert
const index = require('../index')

describe('#sampleTest', () => {
	it('should return true', () => {
		const result = index.dupa()	
		assert.isTrue(result)
	})
})

