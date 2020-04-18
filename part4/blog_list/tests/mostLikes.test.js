const listHelper = require('../utils/list_helper')

describe('mostBlogs', () => {
    test('returns A 1', () => {
        const blogs = [{"title": "A",
            "author": "A",
            "url": "A",
            "likes": 1
        }]
        const result = listHelper.mostLikes(blogs)
        expect(result).toEqual({"author": "A","likes": 1})

    })

    test('returns A 3', () => {
        const blogs = [{"title": "A",
            "author": "A",
            "url": "A",
            "likes": 1
        },
        {"title": "A",
            "author": "A",
            "url": "A",
            "likes": 2
        }
        
    
    ]
        const result = listHelper.mostLikes(blogs)
        expect(result).toEqual({"author": "A","likes": 3})

    })

    test('returns C 20', () => {
        const blogs = [{"title": "A",
            "author": "A",
            "url": "A",
            "likes": 1
        },
        {"title": "C",
            "author": "C",
            "url": "C",
            "likes": 20
        },
        {"title": "A",
            "author": "A",
            "url": "A",
            "likes": 2
        }
        
    
    ]
        const result = listHelper.mostLikes(blogs)
        expect(result).toEqual({"author": "C","likes": 20})

    })


    test('returns C 60', () => {
        const blogs = [{"title": "A",
            "author": "A",
            "url": "A",
            "likes": 1
        },
        {"title": "C",
            "author": "C",
            "url": "C",
            "likes": 20
        },
        {"title": "A",
            "author": "A",
            "url": "A",
            "likes": 2
        },
        {"title": "C",
            "author": "C",
            "url": "C",
            "likes": 20
        },
        {"title": "C",
            "author": "C",
            "url": "C",
            "likes": 20
        }
        
    
    ]
        const result = listHelper.mostLikes(blogs)
        expect(result).toEqual({"author": "C","likes": 60})

    })


    test('returns undefined', () => {
        const blogs = []
        const result = listHelper.mostLikes(blogs)
        expect(result).toEqual({author : undefined, likes : 0})

    })

})