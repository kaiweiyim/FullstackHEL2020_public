const listHelper = require('../utils/list_helper')

describe('mostBlogs', () => {
    test('returns A 1', () => {
        const blogs = [{"title": "A",
            "author": "A",
            "url": "A",
            "likes": 1
        }]
        const result = listHelper.mostBlogs(blogs)
        expect(result).toEqual({"author": "A","blogs": 1})

    })

    test('returns A 2', () => {
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
        const result = listHelper.mostBlogs(blogs)
        expect(result).toEqual({"author": "A","blogs": 2})

    })

    test('returns A 2', () => {
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
        const result = listHelper.mostBlogs(blogs)
        expect(result).toEqual({"author": "A","blogs": 2})

    })


    test('returns C 3', () => {
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
        const result = listHelper.mostBlogs(blogs)
        expect(result).toEqual({"author": "C","blogs": 3})

    })


    test('returns undefined', () => {
        const blogs = []
        const result = listHelper.mostBlogs(blogs)
        expect(result).toEqual({author : undefined, blogs : 0})

    })

})