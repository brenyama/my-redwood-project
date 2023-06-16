import type {
  QueryResolvers,
  MutationResolvers,
  MenuRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const menus: QueryResolvers['menus'] = () => {
  return db.menu.findMany()
}

export const menu: QueryResolvers['menu'] = ({ id }) => {
  return db.menu.findUnique({
    where: { id },
  })
}

export const createMenu: MutationResolvers['createMenu'] = ({ input }) => {
  return db.menu.create({
    data: input,
  })
}

export const updateMenu: MutationResolvers['updateMenu'] = ({ id, input }) => {
  return db.menu.update({
    data: input,
    where: { id },
  })
}

export const deleteMenu: MutationResolvers['deleteMenu'] = ({ id }) => {
  return db.menu.delete({
    where: { id },
  })
}

export const Menu: MenuRelationResolvers = {
  menuItems: (_obj, { root }) => {
    return db.menu.findUnique({ where: { id: root?.id } }).menuItems()
  },
}
