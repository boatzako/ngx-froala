export interface FroalaOptions {
  attribution?: boolean;
  autofocus?: boolean;
  aviaryKey?: boolean;
  aviaryOptions?: any;
  charCounterCount?: boolean;
  charCounterMax?: number;
  codeBeautifierOptions?: any;
  codeMirror?: any;
  codeMirrorOptions?: any;
  codeViewKeepActiveButtons?: any;
  colorsBackground?: string[];
  colorsButtons?: string[];
  colorsHEXInput?: boolean;
  colorsStep?: number;
  colorsText?: string[];
  direction?: string;
  disableRightClick?: string;
  documentReady?: string;
  dragInline?: boolean;
  editInPopup?: string;
  editorClass?: string;
  embedlyEditButtons?: string[];
  embedlyInsertButtons?: string[];
  embedlyKey?: string;
  embedlyScriptPath?: string;
  emoticonsButtons?: string[];
  emoticonsSet?: any;
  emoticonsStep?: number;
  emoticonsUseImage?: true;
  enter?: string;
  entities?: string;
  faButtons?: string[];
  fileAllowedTypes?: string[];
  fileInsertButtons?: string[];
  fileMaxSize?: number;
  fileUpload?: boolean;
  fileUploadMethod?: string;
  fileUploadParam?: string;
  fileUploadParams?: any;
  fileUploadToS3?: any;
  fileUploadURL?: string;
  fileUseSelectedText?: boolean;
  fontAwesomeSets?: any;
  fontAwesomeTemplate?: string;
  fontFamily?: any;
  fontFamilyDefaultSelection?: string;
  fontFamilySelection?: boolean;
  fontSize?: string[];
  fontSizeDefaultSelection?: string;
  fontSizeSelection?: boolean;
  fontSizeUnit?: string;
  formEditButtons?: string[];
  formMultipleStyles?: boolean;
  formStyles?: any;
  formUpdateButtons?: string[];
  fullPage?: boolean;
  height?: number;
  heightMax?: number;
  heightMin?: number;
  helpSets?: any;
  htmlAllowComments?: boolean;
  htmlAllowedAttrs?: string[];
  htmlAllowedEmptyTags?: string[];
  htmlAllowedStyleProps?: string[];
  htmlAllowedTags?: string[];
  htmlDoNotWrapTags?: string[];
  htmlExecuteScripts?: boolean;
  htmlIgnoreCSSProperties?: string[];
  htmlRemoveTags?: string[];
  htmlSimpleAmpersand?: boolean;
  htmlUntouched?: boolean;
  iconsTemplate?: string;
  iframe?: boolean;
  iframeDefaultStyle?: string;
  iframeStyle?: string;
  iframeStyleFiles?: string[];
  imageAddNewLine?: boolean;
  imageAllowedTypes?: string[];
  imageAltButtons?: string[];
  imageCORSProxy?: string;
  imageDefaultAlign?: string;
  imageDefaultDisplay?: string;
  imageDefaultMargin?: number;
  imageDefaultWidth?: number;
  imageEditButtons?: string[];
  imageInsertButtons?: string[];
  imageManagerDeleteMethod?: string;
  imageManagerDeleteParams?: any;
  imageManagerDeleteURL?: string;
  imageManagerLoadMethod?: string;
  imageManagerLoadParams?: any;
  imageManagerLoadURL?: string;
  imageManagerPageSize?: number;
  imageManagerPreloader?: string;
  imageManagerScrollOffset?: number;
  imageManagerToggleTags?: boolean;
  imageMaxSize?: number;
  imageMinWidth?: number;
  imageMove?: boolean;
  imageMultipleStyles?: boolean;
  imageOutputSize?: boolean;
  imagePaste?: boolean;
  imagePasteProcess?: boolean;
  imageResize?: boolean;
  imageResizeWithPercent?: boolean;
  imageRoundPercent?: boolean;
  imageSizeButtons?: string[];
  imageSplitHTML?: boolean;
  imageStyles?: any;
  imageTUIOptions?: any;
  imageTextNear?: boolean;
  imageUpload?: boolean;
  imageUploadMethod?: string;
  imageUploadParam?: string;
  imageUploadParams?: any;
  imageUploadRemoteUrls?: boolean;
  imageUploadToS3?: boolean;
  imageUploadURL?: string;
  indentMargin?: number;
  initOnClick?: boolean;
  inlineClasses?: any;
  inlineStyles?: any;
  keepFormatOnDelete?: boolean;
  language?: string;
  lineBreakerHorizontalOffset?: number;
  lineBreakerOffset?: number;
  lineBreakerTags?: string[];
  lineHeights?: any;
  linkAlwaysBlank?: boolean;
  linkAlwaysNoFollow?: boolean;
  linkAttributes?: any;
  linkAutoPrefix?: string;
  linkConvertEmailAddress?: boolean;
  linkEditButtons?: string[];
  linkInsertButtons?: string[];
  linkList?: any;
  linkMultipleStyles?: boolean;
  linkNoOpener?: boolean;
  linkNoReferrer?: boolean;
  linkStyles?: any;
  linkText?: boolean;
  listAdvancedTypes?: boolean;
  multiLine?: boolean;
  paragraphDefaultSelection?: string;
  paragraphFormat?: any;
  paragraphFormatSelection?: boolean;
  paragraphMultipleStyles?: boolean;
  paragraphStyles?: any;
  pasteAllowLocalImages?: boolean;
  pasteAllowedStyleProps?: string[];
  pasteDeniedAttrs?: string[];
  pasteDeniedTags?: string[];
  pastePlain?: boolean;
  placeholderText?: string;
  pluginsEnabled?: string[];
  quickInsertButtons?: string[];
  quickInsertEnabled?: boolean;
  quickInsertTags?: string[];
  requestHeaders?: any;
  requestWithCORS?: boolean;
  requestWithCredentials?: boolean;
  saveInterval?: number;
  saveMethod?: string;
  saveParam?: string;
  saveParams?: any;
  saveURL?: string;
  scaytAutoload?: boolean;
  scaytCustomerId?: boolean;
  scaytOptions?: any;
  scrollableContainer?: string;
  shortcutsEnabled?: string[];
  shortcutsHint?: boolean;
  specialCharButtons?: string[];
  specialCharactersSets?: any;
  spellcheck?: boolean;
  tabIndex?: number;
  tabSpaces?: number;
  tableCellMultipleStyles?: boolean;
  tableCellStyles?: any;
  tableColors?: string[];
  tableColorsButtons?: string[];
  tableColorsStep?: number;
  tableDefaultWidth?: string;
  tableEditButtons?: string[];
  tableInsertButtons?: string[];
  tableInsertHelper?: boolean;
  tableInsertHelperOffset?: number;
  tableInsertMaxSize?: number;
  tableMultipleStyles?: boolean;
  tableResizer?: boolean;
  tableResizerOffset?: number;
  tableResizingLimit?: number;
  tableStyles?: any;
  theme?: string;
  toolbarBottom?: boolean;
  toolbarButtons?: any;
  toolbarButtonsMD?: any;
  toolbarButtonsSM?: any;
  toolbarButtonsXS?: any;
  toolbarContainer?: boolean;
  toolbarInline?: boolean;
  toolbarSticky?: boolean;
  toolbarStickyOffset?: number;
  toolbarVisibleWithoutSelection?: boolean;
  tooltips?: boolean;
  typingTimer?: number;
  useClasses?: boolean;
  videoAllowedProviders?: string[];
  videoAllowedTypes?: string[];
  videoDefaultAlign?: string;
  videoDefaultDisplay?: string;
  videoDefaultWidth?: number;
  videoEditButtons?: string[];
  videoInsertButtons?: string[];
  videoMaxSize?: number;
  videoMove?: boolean;
  videoResize?: boolean;
  videoResponsive?: boolean;
  videoSizeButtons?: string[];
  videoSplitHTML?: boolean;
  videoTextNear?: boolean;
  videoUpload?: boolean;
  videoUploadMethod?: string;
  videoUploadParam?: string;
  videoUploadParams?: any;
  videoUploadToS3?: any;
  videoUploadURL?: string;
  width?: string;
  wordAllowedStyleProps?: string[];
  wordDeniedAttrs?: string[];
  wordDeniedTags?: string[];
  wordPasteKeepFormatting?: boolean;
  wordPasteModal?: boolean;
  zIndex?: number;
  events?: any;
}