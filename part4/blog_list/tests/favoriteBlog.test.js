const listHelper = require('../utils/list_helper')

describe('FavoriteBlog', () => {
    test('returns A', () => {
        const blogs = [{"title": "A",
            "author": "A",
            "url": "A",
            "likes": 1
        }]
        const result = listHelper.FavoriteBlog(blogs)
        expect(result).toEqual(blogs[0])

    })

    test('returns B', () => {
        const blogs = [{"title": "A",
            "author": "A",
            "url": "A",
            "likes": 1
        },
        {"title": "B",
            "author": "B",
            "url": "B",
            "likes": 2
        }
        
    
    ]
        const result = listHelper.FavoriteBlog(blogs)
        expect(result).toEqual(blogs[1])

    })

    test('returns C', () => {
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
        {"title": "B",
            "author": "B",
            "url": "B",
            "likes": 2
        }
        
    
    ]
        const result = listHelper.FavoriteBlog(blogs)
        expect(result).toEqual(blogs[1])

    })


    test('returns undefined', () => {
        const blogs = []
        const result = listHelper.FavoriteBlog(blogs)
        expect(result).toEqual({title: undefined,author : undefined, likes : 0})

    })

})