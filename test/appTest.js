const assert = require('chai').assert

const app = require('../server')

describe('App', function(){
    describe('sayHello()', function(){
        it('sayHello should return hello', function(){
            let expectedFunction = app.sayHello()
            assert.equal(expectedFunction,"hello")
        })
    
        it('sayHello should return type string', function(){
            let expectedFunction = app.sayHello()
            assert.typeOf(expectedFunction,'string')
        })
    })
    
    describe('addNumber()', function(){
        it('addNumber should return 1+1 = 2', function(){
            let addFunction = app.addNumber(1,1)
            assert.equal(addFunction,2)
        })
    
        it('addNumber should return less then 5', function(){
            let addFunction = app.addNumber(1,1)
            assert.isBelow(addFunction,5)
        })
    
        it('addNumber should return above 5', function(){
            let addFunction = app.addNumber(1,1)
            assert.isAbove(addFunction,5)
        })
    
        it('addNumber should return type of String', function(){
            let addFunction = app.addNumber(1,1)
            assert.typeOf(addFunction,'string')
        })
    
        it('addNumber should return type of Integer', function(){
            let addFunction = app.addNumber(1,1)
            assert.notTypeOf(addFunction,'string')
        })
    
        it('addNumber should return type of number', function(){
            let addFunction = app.addNumber(1,1)
            assert.typeOf(addFunction,'number')
        })
    })

    describe('multiplyNumber()', function(){
        const multiplyNumber = app.multiplyNumber(10,10)
        it('multiplyNumber should return above 50',function(){
            assert.isAbove(multiplyNumber,50)
        })

        it('multiplyNumber should return below 50',function(){
            assert.isBelow(multiplyNumber,50)
        })

        it('multiplyNumber should return equal 100',function(){
            assert.equal(multiplyNumber,100)
        })
    })
    
})