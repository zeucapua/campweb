<script lang="ts">
  import Blockly from "$lib/Blockly.svelte";
  import type { ToolboxInfo } from "blockly/core/utils/toolbox";

  const toolbox = {
    kind: "flyoutToolbox",
    contents: [
      // default blocks from Blockly
      { kind: "block", type: "controls_if" },
      { kind: "block", type: "math_number" },

      // custom blocks, see definition in $lib/Blockly.svelte
      { kind: "block", type: "p" }
    ]
  } satisfies ToolboxInfo;
</script>

<Blockly {toolbox} />
