
export default function (state) {
  const { document, selection } = state
  const first = document.getBlocks().first()

  return state
    .transform()
    .removeNodeByKey(first.key)
    .apply()
}
