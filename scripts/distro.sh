#!/bin/bash -eu
set -o pipefail

echo "Distro: Start "
SCRIPT_DIR=$(cd $(dirname $0); pwd -P)
source "$SCRIPT_DIR/config.sh"

# Install files
"$SCRIPT_DIR/install.sh"

mkdir -p "$DISTRO_DIR"
cd "$BDS_HOME"
tar -cvzf "$DISTRO_DIR/bds_$(uname).tar.gz" bds bds.config include clusterGeneric

echo "Distro: End"
