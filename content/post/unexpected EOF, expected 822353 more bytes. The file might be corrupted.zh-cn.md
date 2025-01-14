---
title: unexpected EOF, expected 822353 more bytes. The file might be corrupted
categories: 计算机
tags:
  - bug
  - ComfyUI
date: 2025-01-14
description: 
image: 
weight: 1
draft: false
lastmod: 2025-01-14T20:50:40+08:00
---
某个工作流的时候遇到了如下报错：


```
# ComfyUI Error Report
## Error Details
- **Node ID:** 63
- **Node Type:** ApplyPulidFlux
- **Exception Type:** RuntimeError
- **Exception Message:** unexpected EOF, expected 822353 more bytes. The file might be corrupted.
## Stack Trace
File "D:\software\ComfyUI-aki-v1.5\execution.py", line 323, in execute
    output_data, output_ui, has_subgraph = get_output_data(obj, input_data_all, execution_block_cb=execution_block_cb, pre_execute_cb=pre_execute_cb)

  File "D:\software\ComfyUI-aki-v1.5\execution.py", line 198, in get_output_data
    return_values = _map_node_over_list(obj, input_data_all, obj.FUNCTION, allow_interrupt=True, execution_block_cb=execution_block_cb, pre_execute_cb=pre_execute_cb)

  File "D:\software\ComfyUI-aki-v1.5\execution.py", line 169, in _map_node_over_list
    process_inputs(input_dict, i)

  File "D:\software\ComfyUI-aki-v1.5\execution.py", line 158, in process_inputs
    results.append(getattr(obj, func)(**inputs))

  File "D:\software\ComfyUI-aki-v1.5\custom_nodes\ComfyUI_PuLID_Flux_ll\pulidflux.py", line 210, in apply_pulid_flux
    face_helper = FaceRestoreHelper(

  File "D:\software\ComfyUI-aki-v1.5\python\lib\site-packages\facexlib\utils\face_restoration_helper.py", line 99, in __init__
    self.face_det = init_detection_model(det_model, half=False, device=self.device, model_rootpath=model_rootpath)

  File "D:\software\ComfyUI-aki-v1.5\python\lib\site-packages\facexlib\detection\__init__.py", line 22, in init_detection_model
    load_net = torch.load(model_path, map_location=lambda storage, loc: storage)

  File "D:\software\ComfyUI-aki-v1.5\python\lib\site-packages\torch\serialization.py", line 1384, in load
    return _legacy_load(

  File "D:\software\ComfyUI-aki-v1.5\python\lib\site-packages\torch\serialization.py", line 1647, in _legacy_load
    typed_storage._untyped_storage._set_from_file(
```

这个原因是 facexlib 的权重没有下载完整就使用了，把其权重文件删了之后重新运行工作流，让它重新生成即可。

参考资料：
- [CSDN博客](https://blog.csdn.net/qq_39691492/article/details/123073208)
- [SDXL_EcomID_ComfyUI/issues/32](https://github.com/alimama-creative/SDXL_EcomID_ComfyUI/issues/32)