const listHelper = require('../utils/list_helper')

describe('totalLikes', () => {
    test('returns one', () => {
        const blogs = [{"title": "A",
            "author": "A",
            "url": "A",
            "likes": 1
        }]
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(1)

    })

    test('returns three', () => {
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
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(3)

    })

    test('returns zero', () => {
        const blogs = []
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(0)

    })

})