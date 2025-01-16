---
title: Weights only load failed
categories: 计算机
tags:
  - bug
  - ComfyUI
date: 2025-01-16
description: 
image: 
weight: 1
draft: false
lastmod: 2025-01-16T16:00:18+08:00
---
在运行图片反推提示词节点的时候出现了错误：
```
# ComfyUI Error Report
## Error Details
- **Node ID:** 3
- **Node Type:** Joy_caption_two_load
- **Exception Type:** _pickle.UnpicklingError
- **Exception Message:** Weights only load failed. Re-running `torch.load` with `weights_only` set to `False` will likely succeed, but it can result in arbitrary code execution. Do it only if you got the file from a trusted source.
Please file an issue with the following so that we can make `weights_only=True` compatible with your use case: WeightsUnpickler error: Unsupported operand 118

Check the documentation of torch.load to learn more about types accepted by default with weights_only https://pytorch.org/docs/stable/generated/torch.load.html.
## Stack Trace

  File "D:\software\ComfyUI-aki-v1.5\execution.py", line 328, in execute
    output_data, output_ui, has_subgraph = get_output_data(obj, input_data_all, execution_block_cb=execution_block_cb, pre_execute_cb=pre_execute_cb)

  File "D:\software\ComfyUI-aki-v1.5\execution.py", line 203, in get_output_data
    return_values = _map_node_over_list(obj, input_data_all, obj.FUNCTION, allow_interrupt=True, execution_block_cb=execution_block_cb, pre_execute_cb=pre_execute_cb)

  File "D:\software\ComfyUI-aki-v1.5\execution.py", line 174, in _map_node_over_list
    process_inputs(input_dict, i)

  File "D:\software\ComfyUI-aki-v1.5\execution.py", line 163, in process_inputs
    results.append(getattr(obj, func)(**inputs))

  File "D:\software\ComfyUI-aki-v1.5\custom_nodes\ComfyUI_SLK_joy_caption_two\joy_caption_two_node.py", line 268, in generate
    self.loadModels()

  File "D:\software\ComfyUI-aki-v1.5\custom_nodes\ComfyUI_SLK_joy_caption_two\joy_caption_two_node.py", line 263, in loadModels
    self.pipeline.loadModels()

  File "D:\software\ComfyUI-aki-v1.5\custom_nodes\ComfyUI_SLK_joy_caption_two\joy_caption_two_node.py", line 229, in loadModels
    self.clip_model = JoyClipVisionModel(self.load_device, self.offload_device)

  File "D:\software\ComfyUI-aki-v1.5\custom_nodes\ComfyUI_SLK_joy_caption_two\joy_caption_two_node.py", line 53, in __init__
    checkpoint = torch.load(BASE_MODEL_PATH / "clip_model.pt", map_location='cpu', weights_only=True)

  File "D:\software\ComfyUI-aki-v1.5\python\lib\site-packages\torch\serialization.py", line 1383, in load
    raise pickle.UnpicklingError(_get_wo_message(str(e))) from None

文件“D：\ software \ ComfyUI-aki-v1.5 \execution.py”，第328行，执行output_data，output_ui，has_subgraph = get_output_data（obj，input_data_all，execution_block_cb =execution_block_cb，pre_execute_cb = pre_execute_cb）文件“D：\ software \ ComfyUI-aki-v1.5 \execution.py”，第203行，在get_output_data return_values = _map_node_over_list（obj，input_data_all，obj.FUNCTION，allow_interrupt = True，execution_block_cb =execution_block_cb，pre_execute_cb = pre_execute_cb）文件中“D:\software\ComfyUI-aki-v1.5\execution.py”，第 174 行，在 _map_node_over_list process_inputs(input_dict, i) 文件“D:\software\ComfyUI-aki-v1.5\execution.py”，第 163 行，在 process_inputs results.append(getattr(obj, func)(**inputs)) 文件中“D:\software\ComfyUI-aki-v1.5\custom_nodes\ComfyUI_SLK_joy_caption_two\joy_caption_two_node.py”，第 268 行，在生成 self.loadModels() 文件中“D:\software\ComfyUI-aki-v1.5\custom_nodes\ComfyUI_SLK_joy_caption_two\joy_caption_two_node.py”，第 263 行，在 loadModels self.pipeline.loadModels() 文件中“D:\software\ComfyUI-aki-v1.5\custom_nodes\ComfyUI_SLK_joy_caption_two\joy_caption_two_node.py”，第 229 行，在 loadModels self.clip_model = JoyClipVisionModel(self.load_device, self.offload_device) 文件中“D:\software\ComfyUI-aki-v1.5\custom_nodes\ComfyUI_SLK_joy_caption_two\joy_caption_two_node.py”，第 53 行，在 __init__ checkpoint = torch.load(BASE_MODEL_PATH / "clip_model.pt", map_location='cpu', Weights_only=正确）文件“D:\software\ComfyUI-aki-v1.5\python\lib\site-packages\torch\serialization.py”，第 1383 行，在加载中引发 pickle.UnpicklingError(_get_wo_message(str(e))) from None
```

相关的插件为[EvilBT/ComfyUI\_SLK\_joy\_caption\_two](https://github.com/EvilBT/ComfyUI_SLK_joy_caption_two)，节点是 `Joy Caption Two Load`。看似我按照 Readme 文档中的教程安装了所有的模型，但有个坑。

由于要用的文件太多，我用 `git clone` 安装了这些仓库，但我的电脑中没有安装 `git lfs`，所以使用这个方法下载的并不是一个完整的文件，只有一个签名。所以在执行工作流的时候会报找不到模型的错误。