import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function dateDistanceFromNowFormatter(date: Date): string {
  return formatDistance(date, new Date(), {
    locale: ptBR,
    addSuffix: true,
  })
}
