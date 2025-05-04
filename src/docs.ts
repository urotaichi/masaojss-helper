/**
 * MasaoJSSとGraphicsオブジェクトのドキュメント情報をまとめたモジュール
 */

import { methodDocumentations, initMethodDocumentations } from './methodDocs';
import { graphicsMethodDocumentations, initGraphicsMethodDocumentations } from './graphicsDocs';

/**
 * 全てのドキュメントを初期化する
 */
export function initAllDocumentations() {
    initMethodDocumentations();
    initGraphicsMethodDocumentations();
}

export {
    methodDocumentations,
    graphicsMethodDocumentations,
    initMethodDocumentations,
    initGraphicsMethodDocumentations
};