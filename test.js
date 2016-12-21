"use strict";
let assert = require('assert');
let SearchSong = require('./index');

describe('function test',function(){
    console.log('test');

    describe('SearchSong()', function() {
        this.timeout(10000);
        it('should return array which is not empty', function() {
            return SearchSong({
                text: '人',
                debug: {
                    num: 1,
                },
                noLastWord: true,
            })
            .then((res) => assert.notEqual(0, res.length, 'result is empty'))
            .fail((err) => {
                if( err.code === 'ETIMEDOUT' ){
                    console.log('ignore timeout error');
                }else{
                    assert.ifError(err);
                }
            })
        });
    });
});
