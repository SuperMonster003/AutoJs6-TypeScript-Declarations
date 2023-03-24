declare module androidx {
	export module emoji2 {
		export module viewsintegration {
			export class EmojiEditTextHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiEditTextHelper>;
				public getKeyListener(keyListener: android.text.method.KeyListener): android.text.method.KeyListener;
				public getEmojiReplaceStrategy(): number;
				public onCreateInputConnection(inputConnection: android.view.inputmethod.InputConnection, outAttrs: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
				public setEnabled(isEnabled: boolean): void;
				public isEnabled(): boolean;
				public constructor(editText: android.widget.EditText);
				public setMaxEmojiCount(maxEmojiCount: number): void;
				public setEmojiReplaceStrategy(replaceStrategy: number): void;
				public constructor(editText: android.widget.EditText, expectInitializedEmojiCompat: boolean);
				public getMaxEmojiCount(): number;
			}
			export module EmojiEditTextHelper {
				export class HelperInternal extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiEditTextHelper.HelperInternal>;
				}
				export class HelperInternal19 extends androidx.emoji2.viewsintegration.EmojiEditTextHelper.HelperInternal {
					public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiEditTextHelper.HelperInternal19>;
				}
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module viewsintegration {
			export class EmojiEditableFactory extends android.text.Editable.Factory {
				public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiEditableFactory>;
				public static getInstance(): android.text.Editable.Factory;
				public newEditable(source: string): android.text.Editable;
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module viewsintegration {
			export class EmojiInputConnection extends android.view.inputmethod.InputConnectionWrapper {
				public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiInputConnection>;
				public getHandler(): android.os.Handler;
				public performPrivateCommand(param0: string, param1: android.os.Bundle): boolean;
				public performPrivateCommand(action: string, data: android.os.Bundle): boolean;
				public clearMetaKeyStates(states: number): boolean;
				public deleteSurroundingTextInCodePoints(beforeLength: number, afterLength: number): boolean;
				public clearMetaKeyStates(param0: number): boolean;
				public commitCorrection(correctionInfo: android.view.inputmethod.CorrectionInfo): boolean;
				public performEditorAction(editorAction: number): boolean;
				public deleteSurroundingText(param0: number, param1: number): boolean;
				public commitCompletion(param0: android.view.inputmethod.CompletionInfo): boolean;
				public getTextAfterCursor(param0: number, param1: number): string;
				public getSelectedText(param0: number): string;
				public commitText(param0: string, param1: number): boolean;
				public performEditorAction(param0: number): boolean;
				public commitCorrection(param0: android.view.inputmethod.CorrectionInfo): boolean;
				public setSelection(start: number, end: number): boolean;
				public getExtractedText(param0: android.view.inputmethod.ExtractedTextRequest, param1: number): android.view.inputmethod.ExtractedText;
				public getCursorCapsMode(param0: number): number;
				public deleteSurroundingText(beforeLength: number, afterLength: number): boolean;
				public beginBatchEdit(): boolean;
				public setSelection(param0: number, param1: number): boolean;
				public sendKeyEvent(param0: android.view.KeyEvent): boolean;
				public getSelectedText(flags: number): string;
				public requestCursorUpdates(cursorUpdateMode: number): boolean;
				public commitText(text: string, newCursorPosition: number): boolean;
				public commitContent(param0: android.view.inputmethod.InputContentInfo, param1: number, param2: android.os.Bundle): boolean;
				public getTextBeforeCursor(param0: number, param1: number): string;
				public getTextAfterCursor(n: number, flags: number): string;
				public performContextMenuAction(id: number): boolean;
				public deleteSurroundingTextInCodePoints(param0: number, param1: number): boolean;
				public finishComposingText(): boolean;
				public getTextBeforeCursor(n: number, flags: number): string;
				public getExtractedText(request: android.view.inputmethod.ExtractedTextRequest, flags: number): android.view.inputmethod.ExtractedText;
				public commitContent(inputContentInfo: android.view.inputmethod.InputContentInfo, flags: number, opts: android.os.Bundle): boolean;
				public commitCompletion(text: android.view.inputmethod.CompletionInfo): boolean;
				public getCursorCapsMode(reqModes: number): number;
				public performContextMenuAction(param0: number): boolean;
				public endBatchEdit(): boolean;
				public setComposingRegion(param0: number, param1: number): boolean;
				public sendKeyEvent(event: android.view.KeyEvent): boolean;
				public closeConnection(): void;
				public setComposingText(text: string, newCursorPosition: number): boolean;
				public setComposingText(param0: string, param1: number): boolean;
				public setComposingRegion(start: number, end: number): boolean;
				public reportFullscreenMode(enabled: boolean): boolean;
				public requestCursorUpdates(param0: number): boolean;
				public reportFullscreenMode(param0: boolean): boolean;
			}
			export module EmojiInputConnection {
				export class EmojiCompatDeleteHelper extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiInputConnection.EmojiCompatDeleteHelper>;
					public updateEditorInfoAttrs(outAttrs: android.view.inputmethod.EditorInfo): void;
					public constructor();
					public handleDeleteSurroundingText(inputConnection: android.view.inputmethod.InputConnection, editable: android.text.Editable, beforeLength: number, afterLength: number, inCodePoints: boolean): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module viewsintegration {
			export class EmojiInputFilter extends java.lang.Object implements android.text.InputFilter {
				public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiInputFilter>;
				public filter(source: string, sourceStart: number, sourceEnd: number, dest: android.text.Spanned, destStart: number, destEnd: number): string;
				public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;
			}
			export module EmojiInputFilter {
				export class InitCallbackImpl extends androidx.emoji2.text.EmojiCompat.InitCallback {
					public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiInputFilter.InitCallbackImpl>;
					public onInitialized(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module viewsintegration {
			export class EmojiKeyListener extends java.lang.Object implements android.text.method.KeyListener {
				public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiKeyListener>;
				public clearMetaKeyState(param0: android.view.View, param1: android.text.Editable, param2: number): void;
				public onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;
				public onKeyOther(view: android.view.View, text: android.text.Editable, event: android.view.KeyEvent): boolean;
				public getInputType(): number;
				public onKeyDown(view: android.view.View, content: android.text.Editable, keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(view: android.view.View, text: android.text.Editable, keyCode: number, event: android.view.KeyEvent): boolean;
				public clearMetaKeyState(view: android.view.View, content: android.text.Editable, states: number): void;
				public onKeyOther(param0: android.view.View, param1: android.text.Editable, param2: android.view.KeyEvent): boolean;
				public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;
			}
			export module EmojiKeyListener {
				export class EmojiCompatHandleKeyDownHelper extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiKeyListener.EmojiCompatHandleKeyDownHelper>;
					public handleKeyDown(editable: android.text.Editable, keyCode: number, event: android.view.KeyEvent): boolean;
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module viewsintegration {
			export class EmojiTextViewHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiTextViewHelper>;
				public constructor(textView: android.widget.TextView, expectInitializedEmojiCompat: boolean);
				public getFilters(filters: android.text.InputFilter[]): android.text.InputFilter[];
				public constructor(textView: android.widget.TextView);
				public updateTransformationMethod(): void;
				public isEnabled(): boolean;
				public setEnabled(enabled: boolean): void;
				public setAllCaps(allCaps: boolean): void;
				public wrapTransformationMethod(transformationMethod: android.text.method.TransformationMethod): android.text.method.TransformationMethod;
			}
			export module EmojiTextViewHelper {
				export class HelperInternal extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiTextViewHelper.HelperInternal>;
					public isEnabled(): boolean;
				}
				export class HelperInternal19 extends androidx.emoji2.viewsintegration.EmojiTextViewHelper.HelperInternal {
					public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiTextViewHelper.HelperInternal19>;
					public isEnabled(): boolean;
				}
				export class SkippingHelper19 extends androidx.emoji2.viewsintegration.EmojiTextViewHelper.HelperInternal {
					public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiTextViewHelper.SkippingHelper19>;
					public isEnabled(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module viewsintegration {
			export class EmojiTextWatcher extends java.lang.Object implements android.text.TextWatcher {
				public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiTextWatcher>;
				public onTextChanged(charSequence: string, start: number, before: number, after: number): void;
				public setEnabled(isEnabled: boolean): void;
				public isEnabled(): boolean;
				public beforeTextChanged(s: string, start: number, count: number, after: number): void;
				public afterTextChanged(s: android.text.Editable): void;
				public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public afterTextChanged(param0: android.text.Editable): void;
			}
			export module EmojiTextWatcher {
				export class InitCallbackImpl extends androidx.emoji2.text.EmojiCompat.InitCallback {
					public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiTextWatcher.InitCallbackImpl>;
					public onInitialized(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module viewsintegration {
			export class EmojiTransformationMethod extends java.lang.Object implements android.text.method.TransformationMethod {
				public static class: java.lang.Class<androidx.emoji2.viewsintegration.EmojiTransformationMethod>;
				public getTransformation(param0: string, param1: android.view.View): string;
				public getOriginalTransformationMethod(): android.text.method.TransformationMethod;
				public onFocusChanged(view: android.view.View, sourceText: string, focused: boolean, direction: number, previouslyFocusedRect: android.graphics.Rect): void;
				public getTransformation(source: string, view: android.view.View): string;
				public onFocusChanged(param0: android.view.View, param1: string, param2: boolean, param3: number, param4: android.graphics.Rect): void;
			}
		}
	}
}

//Generics information:

