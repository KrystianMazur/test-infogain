import { http, HttpResponse, delay } from 'msw'

export const handlers = [
  http.get('/transactions', async () => {
    await delay(700)

    return HttpResponse.json({
      transactions: [
        { id: 1, amount: 120 },
        { id: 2, amount: 101 },
        { id: 3, amount: 100 },
        { id: 4, amount: 51 },
        { id: 5, amount: 50 },
      ],
    })
  }),
]
