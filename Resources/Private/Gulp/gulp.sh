#!/bin/sh
# Execute this File in the Root Folder of the Project

clear
echo "\nGulp Setup\n==========\n\n"

# Default Werte
NPM_INSTALL=false
THEME_DEFAULT='Dotpulse.Theme'
MULTISITE=false

#Dateien:
editorconfig='# http://EditorConfig.org\n# top-most EditorConfig file\nroot = true\n\n[*]\nend_of_line = lf\ninsert_final_newline = true\ncharset = utf-8\ntrim_trailing-whitespace = true\nindent_style = tab\n\n[composer.*]\nindent_style = space\nindent_size = 4\n\n[*.{json,yaml,yml},.jscsrc]\nindent_style = space\nindent_size = 2\n\n[Sites.xml]\nindent_style = space\nindent_size = 1\n\n[*.{note,md,edit,read}]\ntrim_trailing-whitespace = false'
jscsrc='{\n  "preset": "google",\n  "fileExtensions": [".js", "jscs"],\n\n  "requireSemicolons": true,\n  "requireParenthesesAroundIIFE": true,\n  "maximumLineLength": 120,\n  "validateLineBreaks": "LF",\n  "validateIndentation": "\\t",\n  "disallowTrailingComma": true,\n  "requireCamelCaseOrUpperCaseIdentifiers": "ignoreProperties",\n\n  "disallowSpacesInsideObjectBrackets": null,\n  "disallowSpaceAfterObjectKeys": false,\n  "disallowImplicitTypeConversion": ["string"],\n\n  "safeContextKeyword": "_this",\n\n  "jsDoc": {\n    "checkAnnotations": "closurecompiler",\n    "checkParamNames": true,\n    "requireParamTypes": true,\n    "checkRedundantParams": true,\n    "checkReturnTypes": true,\n    "checkRedundantReturns": true,\n    "requireReturnTypes": true,\n    "checkTypes": "capitalizedNativeCase",\n    "checkRedundantAccess": true,\n    "requireNewlineAfterDescription": true\n  },\n\n  "excludeFiles": [\n    "test/data/**",\n    "patterns/*"\n  ]\n}'
scssLint="exclude: 'bower_components/**'\n\nlinters:\n  NameFormat:\n    enabled: false\n  ColorVariable:\n    enabled: false\n  PlaceholderInExtend:\n    enabled: false\n  PropertySortOrder:\n    enabled: false\n  BorderZero:\n    enabled: false\n  Indentation:\n    enabled: false\n  SpaceAfterVariableName:\n    enabled: false\n  PropertySpelling:\n    enabled: false\n  LeadingZero:\n    enabled: false"
package='{\n  "name": "Gulp",\n  "version": "2.0.0",\n  "description": "Dependencies for Gulp (Copy Assets, render CSS & JS)",\n  "private": true,\n  "dependencies": {\n    "better-console": "^0.2.4",\n    "css-mqpacker": "^4.0.0",\n    "cssnano": "^3.5.2",\n    "del": "^2.2.0",\n    "fs": "0.0.2",\n    "glob": "^7.0.0",\n    "gulp": "gulpjs/gulp#4.0",\n    "gulp-changed": "^1.3.0",\n    "gulp-chmod": "^1.3.0",\n    "gulp-concat": "^2.6.0",\n    "gulp-cssbeautify": "^0.1.3",\n    "gulp-flatten": "^0.2.0",\n    "gulp-header": "^1.7.1",\n    "gulp-include": "^2.1.0",\n    "gulp-jshint": "^2.0.0",\n    "gulp-memory-cache": "^0.3.0",\n    "gulp-notify": "^2.2.0",\n    "gulp-plumber": "^1.1.0",\n    "gulp-postcss": "^6.1.0",\n    "gulp-sass": "^2.2.0",\n    "gulp-size": "^2.0.0",\n    "gulp-sourcemaps": "^1.6.0",\n    "gulp-uglify": "^1.5.3",\n    "gulp-util": "^3.0.7",\n    "jshint": "^2.9.1",\n    "jshint-stylish": "^2.1.0",\n    "lost": "^6.7.2",\n    "path": "^0.12.7",\n    "pleeease-filters": "^2.0.0",\n    "postcss-assets": "^4.0.1",\n    "postcss-center": "^1.0.0",\n    "postcss-flexbox": "^1.0.2",\n    "postcss-flexibility": "^1.0.2",\n    "postcss-pseudoelements": "^3.0.0",\n    "postcss-selector-matches": "^2.0.1",\n    "postcss-selector-not": "^2.0.0",\n    "postcss-short": "^1.4.0",\n    "postcss-svg-fallback": "^1.2.3",\n    "require-dir": "^0.3.0",\n    "rucksack-css": "^0.8.5"\n  }\n}'

if [[ "$1" == "editor" || "$1" == "-e" ]]; then
  echo 'Schreibe Editor Konfigurationsdateien...'
  echo "$editorconfig" >.editorconfig
  echo "$jscsrc" >.jscsrc
  echo "$scssLint" >.scss-lint.yml
  echo 'Dateien wurden erstellt'
  echo '\n'
  exit
fi

if [[ "$1" == "run" || "$1" == "-r" ]]; then
  echo 'Gulp Task auswählen'
  PS3='Task: '
  select opt in 'Rendern & beobachten' 'Einmaliges Rendern' 'Abbrechen'
  do
    case $opt in
      Abbrechen)
        echo '\n'
        break;;
      'Rendern & beobachten' )
        echo '\n'
        select opt in 'Mit Sourcemaps' 'Ohne Sourcemaps'
        do
          case $opt in
            'Mit Sourcemaps' )
              gulp -m
              break;;
            'Ohne Sourcemaps' )
              gulp
              break;;
          esac
        done
        break;;
      'Einmaliges Rendern' )
        echo '\n'
        select opt in 'Mit Sourcemaps' 'Ohne Sourcemaps'
        do
          case $opt in
            'Mit Sourcemaps' )
              gulp build -m
              break;;
            'Ohne Sourcemaps' )
              gulp build
              break;;
          esac
        done
        break;;
    esac
  done
  exit
fi

if [[ "$1" == "package" || "$1" == "-p" ]]; then
  echo 'package.json aktualisieren...'
  echo "$package" >package.json
  echo 'Datei wurden erstellt'
  echo '\n'
  exit
fi

if [[ "$1" == "update" || "$1" == "-u" ]]; then
  echo 'Gulp deinstallieren...'
  npm uninstall -g gulp gulp-cli
  echo 'Gulp CLI installieren...'
  npm install -g gulp-cli
  echo 'Gulp wurde upgedated'
  echo '\n'
  exit
fi

if [[ "$1" == "npm" || "$1" == "-n" ]]; then
  echo 'node_modules löschen...'
  rm -rf node_modules;
  echo 'Ordner wurde gelöscht'
  echo '\n'
  echo 'Module installieren...'
  npm cache clean
  rm -f npm-shrinkwrap.json
  npm install
  npm shrinkwrap
  echo 'Module wurden installiert'
  echo '\n'
  exit
fi

if [[ "$1" == "init" || "$1" == "-i" ]]; then
  echo '\n'
  PS3='NPM Module neu installieren? '
  select opt in Ja Nein
  do
    case $opt in
      Nein) break;;
      Ja)
        NPM_INSTALL=true
        break;;
    esac
  done

  echo '\n'
  read -p 'Name der Website: ' NAME

  echo '\n'
  read -p 'URL der Website (inkl. http): ' URL

  echo '\n'
  PS3='Mit was wird die Seite realisiert? '
  select opt in Neos Flow
  do
    SYSTEM=$opt
    break
  done

  echo '\n'
  read -e -p "Name des Packages mit den Resourcen [${THEME_DEFAULT}]: " THEME
  THEME="${THEME:-${THEME_DEFAULT}}"

  echo '\n'
  if [[ $SYSTEM == 'Neos' ]]; then
    rm -rf gulp
    PS3='Ist das Theme im Sites-Ordner (Single-Site)? '
    select opt in Ja Nein
    do
      case $opt in
        Ja) break;;
        Nein)
          MULTISITE=true
          break;;
      esac
    done
  fi

  echo '\n'
  echo 'Schreibe Konfiguration...'

  # Write gulpfile.js
  echo "/*! Version: 2.0.0\n\n\t'--b'  -> CSS Dateien werden 'schön' ausgegeben\n\t'--d'  -> CSS & JS Dateien werden nicht minimiert\n\t'--m'  -> Sourcemaps werden generiert\n\n\tDie Regeln können auch in einem String kombiniert werden:\n\t\t--bd\n\t\t--bm\n\t\t--dm\n\t\t--bdm\n\n\tDie Werte müssen jedoch alphabetisch sortiert sein\n\n\t'gulp -T' listet alle verfügbaren Tasks auf\n\n*/\n\nGLOBAL.settings = {\n\tname: '$NAME',\n\turl: '$URL',\n\ttheme: '$THEME',\n\tsystem: '$SYSTEM', // Neos oder Flow\n\tmultisite: $MULTISITE\n};\n\nvar rootpath = './gulp';\nif (settings.system == 'Neos') {\n\trootpath = './www/Neos/Packages/Plugins/Dotpulse.Base/Resources/Private/Gulp';\n}\n\nGLOBAL.config = require(rootpath + '/config');\nrequire('require-dir')(rootpath + '/tasks', {\n\trecurse: true\n});" >gulpfile.js
  echo "$package" >package.json
  echo "$editorconfig" >.editorconfig
  echo "$jscsrc" >.jscsrc
  echo "$scssLint" >.scss-lint.yml
  echo 'Konfiguration wurden erstellt'

  if [[ $NPM_INSTALL == true ]]; then
    echo '\n'
    echo 'NPM Module neu installieren...'
    echo 'node_modules löschen...'
    rm -rf node_modules;
    echo 'Ordner wurde gelöscht'
    echo '\n'
    echo 'Module installieren...'
    npm cache clean
    rm -f npm-shrinkwrap.json
    npm install
    npm shrinkwrap
    echo 'NPM Module wurden installiert'
  fi

  gulp -T
  exit
fi

echo 'Befehle:\n'
echo '  -r,  run                         Gulp ausführen'
echo '  -i,  init                        Gulp initialisieren'
echo '  -u,  update                      Globales Gulp updaten'
echo '  -e,  editor                      Editor Konfiguration aktualisieren'
echo '  -p,  package                     package.json aktualisieren'
echo '  -n,  npm                         NPM Module neu installieren'
echo '\n'

echo '\n'
echo 'Task auswählen'
PS3='Task: '
select opt in 'Gulp ausführen' 'Gulp initialisieren' 'Globales Gulp updaten' 'Editor Konfiguration aktualisieren' 'package.json aktualisieren' 'NPM Module neu installieren' 'Abbrechen'
do
  case $opt in
    Abbrechen)
      echo '\n'
      break;;
    'Gulp ausführen' )
      sh gulp.sh -r
      break;;
    'Gulp initialisieren' )
      sh gulp.sh -i
      break;;
    'Globales Gulp updaten' )
      sh gulp.sh -u
      break;;
    'Editor Konfiguration aktualisieren' )
      sh gulp.sh -e
      break;;
    'package.json aktualisieren' )
      sh gulp.sh -p
      break;;
    'NPM Module neu installieren' )
      sh gulp.sh -n
      break;;
  esac
done
