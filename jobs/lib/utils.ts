// const defaultQueryState = Object.entries(queryStates)
//     .map(([key, value]) => ({
//         [key]: null,
//     }))
//     .reduce((acc, cur) => ({ ...acc, ...cur }), {})


export const nullifyObject = <T = {}>(obj: T): Record<string, null> => {
    return Object.entries(obj as Record<string, unknown>)
        .map(([key, value]) => ({
            [key]: null,
        }))
        .reduce((acc, cur) => ({ ...acc, ...cur }), {})
}