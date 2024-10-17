import { uuid } from '@sanity/uuid'

/**
 * Generate a new Sanity document ID
 * @param prefixed - whether to prefix the document ID with "drafts."
 * 
 */
export const genSanityDocumentId = (prefixed?: boolean) => {
    const documentId = uuid()
    return prefixed ? `drafts.${documentId}` : documentId
}