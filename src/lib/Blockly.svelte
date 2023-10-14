<script lang="ts">
  import { onMount } from "svelte";
  import Blockly from "blockly";
  import { javascriptGenerator } from "blockly/javascript";
  import type { ToolboxDefinition } from "blockly/core/utils/toolbox";

  export let toolbox : ToolboxDefinition;
  let blocklyDiv : HTMLDivElement;
  let jsCode;
  
  onMount(() => {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "p",
        "message0": "<p> %1",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "String"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "p tag",
        "helpUrl": ""
      }
    ]);

    jsCode = javascriptGenerator.workspaceToCode(blocklyDiv);

    Blockly.inject(blocklyDiv, { toolbox: toolbox });
  });
</script>

<div class="w-[64rem] h-[48rem] p-8">
  <div id="blocklyDiv" bind:this={blocklyDiv} class="w-full h-full" />
</div>
